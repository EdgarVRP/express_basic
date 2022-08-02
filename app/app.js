//Usando objeto express
const express=require('express')
//App de express
const app=express()
//Puerto en que se va a alojar la app: localhost:3000
const port=3000
//path inicial, respondera al entrar en localhost:3000
app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})
//Para inicializar la app
app.listen(port,()=>{
    console.log(`Ejemplo de app listening en puerto ${port}`)
})
//Respondiendo a localhost:3000/launchx
app.get('/launchx',(req,res)=>{
    res.send('Bienvenidos a launchx')
})
//Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode',(req,res)=>{
    const explorer = {name:'Explorer', msg:'Hello'}
    res.send(explorer)
})

//Query Params: Recibir Parametros por la url
//localhost:3000/explorers/Edgar
//req.params={"explorerName":"Edgar"}
app.get('/explorers/:explorerName',(req,res)=>{
    res.send(req.params)
})