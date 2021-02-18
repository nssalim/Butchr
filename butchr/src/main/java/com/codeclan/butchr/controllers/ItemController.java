package com.codeclan.butchr.controllers;

import com.codeclan.butchr.models.stock.Item;
import com.codeclan.butchr.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemRepository itemRepository;

    @GetMapping(value = "/items")
    public ResponseEntity<List<Item>> getAllItems(){
        return (new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK));
    }
}
