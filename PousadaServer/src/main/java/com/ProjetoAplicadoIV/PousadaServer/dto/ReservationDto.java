package com.ProjetoAplicadoIV.PousadaServer.dto;

import com.ProjetoAplicadoIV.PousadaServer.enun.ReservationStatus;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ReservationDto {

    private Long id;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

    private Long price;

    private ReservationStatus reservationStatus;

    private Long roomId;

    private String roomType;

    private String roomName;

    private long userId;

    private String username;
}
