<script setup>
    import {ref,onMounted,defineAsyncComponent} from 'vue';
    import express from "express";
    import bodyParser from "body-parser";
    import axios from "axios";

    const app = express();
    const port = 3000;

    app.listen(port,(req,res)=>{
        console.log(`Server running on port: ${port}`);
    })


</script>


<template>
    <h1>sort</h1>
</template>