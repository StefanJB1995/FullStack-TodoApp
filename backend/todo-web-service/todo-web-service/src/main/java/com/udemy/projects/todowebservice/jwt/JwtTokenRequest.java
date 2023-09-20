package com.udemy.projects.todowebservice.jwt;

@SuppressWarnings("preview")
public record JwtTokenRequest(String username, String password) {}