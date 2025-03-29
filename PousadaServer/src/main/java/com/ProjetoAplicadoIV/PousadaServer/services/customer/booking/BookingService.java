package com.ProjetoAplicadoIV.PousadaServer.services.customer.booking;

import com.ProjetoAplicadoIV.PousadaServer.dto.ReservationDto;
import com.ProjetoAplicadoIV.PousadaServer.dto.ReservationResponseDto;

public interface BookingService {

    boolean postReservation(ReservationDto reservationDto);

    ReservationResponseDto getAllReservationByUserId(Long userId, int pageNumber);
}
