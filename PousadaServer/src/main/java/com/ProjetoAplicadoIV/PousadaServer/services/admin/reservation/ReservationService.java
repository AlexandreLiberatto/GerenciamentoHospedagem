package com.ProjetoAplicadoIV.PousadaServer.services.admin.reservation;

import com.ProjetoAplicadoIV.PousadaServer.dto.ReservationResponseDto;

public interface ReservationService {

    ReservationResponseDto getAllReservation(int pageNumber);
}
