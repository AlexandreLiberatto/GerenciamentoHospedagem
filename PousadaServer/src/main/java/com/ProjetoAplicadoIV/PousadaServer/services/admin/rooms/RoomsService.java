package com.ProjetoAplicadoIV.PousadaServer.services.admin.rooms;

import com.ProjetoAplicadoIV.PousadaServer.dto.RoomDto;
import com.ProjetoAplicadoIV.PousadaServer.dto.RoomsResponseDto;

public interface RoomsService {

    boolean postRoom(RoomDto roomDto);

    RoomsResponseDto getAllRooms(int pageNumber);

    RoomDto getRoomById(Long id);

    boolean updateRoom(Long id, RoomDto roomDto);
}
