package com.ProjetoAplicadoIV.PousadaServer.services.admin.rooms;

import com.ProjetoAplicadoIV.PousadaServer.dto.RoomDto;
import com.ProjetoAplicadoIV.PousadaServer.entity.Room;
import com.ProjetoAplicadoIV.PousadaServer.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomsServiceImpl implements RoomsService{

    private final RoomRepository roomRepository;

    public boolean postRoom(RoomDto roomDto){
        try {
            Room room = new Room();

            room.setName(roomDto.getName());
            room.setPrice(roomDto.getPrice());
            room.setType(roomDto.getType());
            room.setAvailable(true);

            roomRepository.save(room);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
