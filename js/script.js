// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 2 2025
// This file contains the JS functions for index.html

"use strict"

function volumeOfSphere() {
  // Setting the varibles
  const radiusOfTheSphere= parseFloat(document.getElementById("radius-of-the-sphere").value)
  const volumeOfSphere = (4/3) * Math.PI * Math.pow(radiusOfTheSphere,3)
  // clacualtoins
  document.getElementById("Volume").innerHTML =
  "Volume is: " + volumeOfSphere.toFixed(2)
}
