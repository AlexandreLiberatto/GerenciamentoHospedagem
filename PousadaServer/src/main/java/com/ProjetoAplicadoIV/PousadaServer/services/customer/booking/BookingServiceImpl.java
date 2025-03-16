package com.ProjetoAplicadoIV.PousadaServer.services.customer.booking;

import com.ProjetoAplicadoIV.PousadaServer.dto.ReservationDto;
import com.ProjetoAplicadoIV.PousadaServer.entity.Reservation;
import com.ProjetoAplicadoIV.PousadaServer.entity.Room;
import com.ProjetoAplicadoIV.PousadaServer.entity.User;
import com.ProjetoAplicadoIV.PousadaServer.enun.ReservationStatus;
import com.ProjetoAplicadoIV.PousadaServer.repository.ReservationRepository;
import com.ProjetoAplicadoIV.PousadaServer.repository.RoomRepository;
import com.ProjetoAplicadoIV.PousadaServer.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final UserRepository userRepository;

    private final RoomRepository roomRepository;

    private final ReservationRepository reservationRepository;

    public boolean postReservation(ReservationDto reservationDto){
        Optional<User> optionalUser = userRepository.findById(reservationDto.getUserId());
        Optional<Room> optionalRoom = roomRepository.findById(reservationDto.getRoomId());

        if(optionalRoom.isPresent() && optionalUser.isPresent()){
            Reservation reservation = new Reservation();

            reservation.setRoom(optionalRoom.get());
            reservation.setUser(optionalUser.get());
            reservation.setCheckInDate(reservationDto.getCheckInDate());
            reservation.setCheckOutDate(reservationDto.getCheckOutDate());
            reservation.setReservationStatus(ReservationStatus.PENDING);

            Long days = ChronoUnit.DAYS.between(reservationDto.getCheckInDate(), reservationDto.getCheckOutDate());
            reservation.setPrice(optionalRoom.get().getPrice() * days);

            reservationRepository.save(reservation);
            return true;
        }
        return false;
    }
}
