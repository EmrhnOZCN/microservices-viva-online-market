package com.vivaproject.authservice.controller;


import com.vivaproject.authservice.dto.AuthRequest;
import com.vivaproject.authservice.dto.AuthResponse;
import com.vivaproject.authservice.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping(value = "/register")
    public ResponseEntity<AuthResponse> register(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @GetMapping("/secured")
    public ResponseEntity<String> securedEndpoint(){

        return ResponseEntity.ok("Başarılı");
    }
}
