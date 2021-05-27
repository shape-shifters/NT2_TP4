<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Punto 2 - Componente</h2>
      <hr>
      
      <button class="btn btn-secondary my-3 mr-3" @click="clearData()">LIMPIAR DATOS</button> 
      <button class="btn btn-danger my-3 mr-3" @click="getPostsXML()">XMLHttpRequest</button>    
      <button class="btn btn-warning my-3 mr-3" @click="getPostsFetch()">FETCH</button>    
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">AXIOS</button>    
      
      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
          <tr v-for="(post,index) in posts" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{post[col]}}</td>
          </tr>
        </table>
        <h4 class="alert alert-primary">Se encontraron {{posts.length}} usuarios</h4>
      </div>
      <h4 v-else class="alert alert-danger">No se encontraron datos de usuarios para mostrar</h4>

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://60aeb9365b8c300017deb261.mockapi.io/usuarios',
        posts : []
        
      }
    },
    methods: {
      clearData(){
        this.posts = {}
      },

      // XMLHttpRequest
      getPostsXML() {
        let xhr = new XMLHttpRequest
        xhr.open('get',this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest',respuesta)
            this.posts = respuesta
          }
          else {
            console.error(`Error --> Status ${xhr.status}`)
          }
        })
        xhr.addEventListener('error', err => {
            console.error(`Error XMLHttpRequest --> `, err)
        })
        xhr.send()
      },

      // FETCH
      getPostsFetch() {
          fetch(this.url)
          .then(datos => datos.json())
          .then(respuesta => {
            console.log('FETCH', respuesta); // ???
            this.posts = respuesta
          })
          .catch(error => console.error(error))
      },

      // AXIOS
      getPostsAxios() {
          this.axios(this.url)
          .then( respuesta => {
            console.log('AXIOS', respuesta.data);
            this.posts = respuesta.data
          })
          .catch(error => console.error(error))
      }

    },
    computed: {
      getCols() {
        return Object.keys(this.posts[0])
      }
    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background: rgb(180,221,180);
    color: white;
  }

  hr {
    background-color: #fff;
  }  
</style>