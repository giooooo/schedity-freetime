
export default {
  name: 'dashboard',
  // component properties/variables
  props: {

  },
  data() {
    return  {
      drawer: true,
      items: [
          { title: 'Graphs and Maps', icon: 'my_location', link: '/dash/graphsmaps' },
          { title: 'Manage Data', icon: 'data_usage', link: '/dash/managedata' },
          { title: 'Generate Ticket', icon: 'bookmark_border', link: '/dash/generateticket' },
      ],
      mini: false,
      right: null,
    }
  },
  computed: {

  },
  // when component uses other components
  components: {

  },
  watch: {

  },
  methods: {

  },
  // component lifecycle hooks
  beforeCreate() {
    return {

    }
  },
  mounted() {

  },
}
