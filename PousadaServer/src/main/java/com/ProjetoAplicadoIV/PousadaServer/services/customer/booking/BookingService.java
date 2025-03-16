package com.ProjetoAplicadoIV.PousadaServer.services.customer.booking;

import com.ProjetoAplicadoIV.PousadaServer.dto.ReservationDto;

public interface BookingService {

    boolean postReservation(ReservationDto reservationDto);
}
