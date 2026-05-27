package org.example.model;


import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Login")
public class Login {
    private String email;
    private String name;
    private String password;  // null during oauth

    private String provider;
    private String googleId;
    private String pic;
}
