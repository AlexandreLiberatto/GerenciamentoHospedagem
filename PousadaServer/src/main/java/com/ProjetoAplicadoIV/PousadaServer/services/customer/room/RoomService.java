package com.ProjetoAplicadoIV.PousadaServer.services.customer.room;

import com.ProjetoAplicadoIV.PousadaServer.dto.RoomsResponseDto;

public interface RoomService {

    RoomsResponseDto getAvailableRooms(int pageNumber);
}
