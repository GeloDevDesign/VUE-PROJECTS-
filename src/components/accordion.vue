<script setup>
import { ref, onMounted, computed } from 'vue';

    const items =ref([{

      id: 1,
      question: 'What is HTML ?',
      answer: 'Based on the search results, HTML (Hypertext Markup Language) is a standard markup language used to create web pages. It annotates text so that machines can understand and manipulate it, making it possible to define the structure and purpose of different page elements.',
      open: false
      
    },
    {
      id:2,
      question: 'What is CSS ?',
      answer: 'Based on the search results, CSS (Cascading Style Sheets) is a styling language used to separate the presentation of a document written in a markup language, such as HTML, from its structure. It allows developers to control the layout, visual styling, and user experience of a website without altering the underlying HTML structure.',
      open: falseasdfasdfasdfasdf
      name:'titegi'
    },
        
    {
      id:3,
      question: 'What is Javascript',
      answer: 'JavaScript is a text-based programming language used to make web pages interactive. It’s a fundamental technology for creating dynamic and engaging user experiences on the web. JavaScript is executed on both client-side (in a web browser) and server-side (using technologies like Node.js).',
      open: false
      
    }
  
  ])

  const toggelAccordion = (index) =>{

      items.value = items.value.map((item,i)=>({

          ...item,
          
          open: i === index ?!item.open : false

       }))
       
  }

</script>

<template>
            
          <div>
            <div v-for="(item,index) in items" :key="index">
              <div class="w-96 flex  justify-between">
                <div class="font-bold text-2xl" @click="toggelAccordion(index)">{{ item.question }}</div>
                <div @click="toggelAccordion(index)">{{ item.open? "Down" : "Up" }}</div>
              </div>
              <div class="w-96" v-show="item.open">{{ item.answer }}</div>
            </div>
          </div>

</template>


