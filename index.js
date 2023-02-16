const express = require('express')
const app = express()
const parkings = require('./parkings.json')
const reservation = require('./reservations.json')
app.use(express.json())

app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})
app.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(parking)
})

app.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})
app.get('/parkings/:id/reservations',(req,res)=>{
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    if(parking){
        res.status(200).json(reservation)

    }else{
        console.log("error")
    }
})
app.put('/parking/:id/reservations/:idReservation',(req,res)=>{
    const id = parseInt(req.params.id)
    const idR = parseInt(req.params.idReservation)
    const parking = parkings.find(parking => parking.id === id)
    const reservations = reservation.find(reservation=> reservation.id === idR)
    if(reservations ){
       // reservations.id=req.body.id
        reservations.parking=req.body.parking
        reservations.parkingId=req.body.parkingId
        reservations.city=req.body.city
        reservations.clientName=req.body.clientName
        reservations.vehicle=req.body.vehicle
        reservations.licensePlate=req.body.licensePlate
        reservations.checkin=req.body.checkin
        reservations.checkout=req.body.checkout

        res.status(200).json(reservations)

    }else{
        console.log("error")
    }
})

app.post('/parkings/:id/reservations', (req,res) => {
 
    reservation.push(req.body)
        res.status(200).json(reservation)

    
})
app.delete('/parking/:id/reservations/:idReservation',(req,res)=>{
    const id = parseInt(req.params.id)
    const idR = parseInt(req.params.idReservation)
    const reserv = reservation.find(reservation=> reservation.id === idR)
    if(reserv ){
        reservation.splice(reservation.indexOf(reserv),1)
        res.status(200).json(reservation)

    }else{
        console.log("error")
    }
})

app.put('/parking/:id/reservations/:idReservation',(req,res)=>{
    const id = parseInt(req.params.id)
    const idR = parseInt(req.params.idReservation)
    const reserv = reservation.find(reservation=> reservation.id === idR)
    if(reserv ){
        reservation.splice(reservation.indexOf(reserv),1)
        res.status(200).json(reservation)

    }else{
        console.log("error")
    }
})
app.listen(5000, () => {
    console.log("serveur 9a3ed yekhdem 3la port 5000")
})