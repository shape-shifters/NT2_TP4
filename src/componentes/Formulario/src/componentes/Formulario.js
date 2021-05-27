
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      allMyData: [],
      nombreMinLength : 5,
      nombreMaxLength : 15,
      edadMin : 18,
      edadMax : 120
    }
  },

  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },
    enviar() {
      this.allMyData.push(this.formData)
      this.formData = this.getInicialData()
      this.formState._reset()
    }
  },
  
  computed: {
    getCols() {
      return Object.keys(this.allMyData[0])
    }
  }
  
}


