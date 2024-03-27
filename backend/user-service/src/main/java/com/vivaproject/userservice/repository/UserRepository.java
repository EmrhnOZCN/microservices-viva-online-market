package com.vivaproject.userservice.repository;

import com.vivaproject.userservice.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
}
