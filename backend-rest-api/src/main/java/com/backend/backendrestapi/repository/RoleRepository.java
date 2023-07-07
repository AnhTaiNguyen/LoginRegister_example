package com.backend.backendrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.backendrestapi.entity.Role;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}
