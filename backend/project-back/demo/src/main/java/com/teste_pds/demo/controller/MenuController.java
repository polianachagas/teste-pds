package com.teste_pds.demo.controller;

import com.teste_pds.demo.model.Menu;
import com.teste_pds.demo.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MenuController {

    @Autowired
    private MenuRepository menuRepository;

    @PostMapping("/menu")
    Menu newMenu(@RequestBody Menu newMenu) {
        return menuRepository.save(newMenu);
    }

    @GetMapping("/menu")
    List<Menu> gettAllMenu() {
        return menuRepository.findAll();
    }
}
