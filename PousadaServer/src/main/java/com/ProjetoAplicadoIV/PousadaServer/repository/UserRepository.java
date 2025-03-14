package com.ProjetoAplicadoIV.PousadaServer.repository;

import com.ProjetoAplicadoIV.PousadaServer.entity.User;
import com.ProjetoAplicadoIV.PousadaServer.enun.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findFirstByEmail(String email);

    Optional<User> findByUserRole(UserRole userRole);
}