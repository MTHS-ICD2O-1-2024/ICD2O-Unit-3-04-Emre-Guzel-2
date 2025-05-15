// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 2 2025
// This file contains the JS functions for index.html

"use strict"

function fahrenheitToCelsiusCalcualotr() {
  // Setting the varibles
  const fahrenheitValue = parseFloat(document.getElementById("fahrenheit").value)
  const celsiusInput = document.getElementById("celsius")
  const celsiusValue = (fahrenheitValue - 32) * 5 / 9

  // Save the updated value back to localStorage (as strings)
  localStorage.setItem("fahrenheitValue", fahrenheitValue)
  localStorage.setItem("celsiusValue", celsiusValue)

  // clacualtoins
  celsiusInput.value = celsiusValue.toFixed(2)
  document.getElementById("formula").innerHTML = "Formula: (" + fahrenheitValue + " - " + 32 + ") X 5/9"
}

function showfahrenheit() {
  // Get stored values
  const fahrenheitValue = localStorage.getItem("fahrenheitValue")
  const celsiusValue = localStorage.getItem("celsiusValue")

  // check local stoge has a value 
  if (fahrenheitValue != null && celsiusValue != null) {
    document.getElementById("fahrenheit").value = fahrenheitValue
    document.getElementById("celsius").value = parseFloat(celsiusValue).toFixed(2)
    document.getElementById("formula").innerHTML = "Formula: (" + fahrenheitValue + " - 32) X 5/9"
  }
}
