<template>
    <div>
    <h1>Dashboard</h1>
    <div class="tabs">
        <ul>
            <li class="is-active"><a href="">Yeni Ürünler</a></li>
            <li v-for="category in categories" > <a href="/">{{category.title}}</a></li>
        </ul>
    
    </div>
    </div>
</template>

<script>
import {db} from '../main.js'

export default {
    name:'dashboard',
    data(){
        return{
            categories:[]
        }
    },
    firestore(){
        return{
            categories:db.collection('categories')
        }
    },
    firestore(){
        return{
            categories:db.collection('categories')
        }
    }

}
</script>

<style>

</style>
