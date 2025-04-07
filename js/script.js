// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 2 2025
// This file contains the JS functions for index.html

"use strict"

function fahrenheitToCelsiusCalcualotr() {
  // Setting the varibles
  const fahrenheitValue= parseInt(document.getElementById("fahrenheit").value)
  const celsiusInput= document.getElementById("celsius")
  const celsiusValue = (fahrenheitValue - 32) * 5/9
  // clacualtoins
  celsiusInput.value =celsiusValue.toFixed(3)
  document.getElementById("formula").innerHTML = "Formula: (" + fahrenheitValue + "-"+32+") X 5/9" 
}
