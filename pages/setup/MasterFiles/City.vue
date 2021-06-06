<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >
        <MaterialCard
          color="success"
          title="City"
          class="px-5 py-3"
        >
          <v-data-table
            :headers="headers"
            :items="cityData"
            sort-by="en_name"
          >
            <template v-slot:top>
              <v-toolbar
                flat
              >
                <!--                <v-toolbar-title>Country CRUD</v-toolbar-title>-->
                <!--                <v-divider-->
                <!--                  class="mx-4"-->
                <!--                  inset-->
                <!--                  vertical-->
                <!--                ></v-divider>-->
                <v-spacer></v-spacer>
                <v-dialog
                  v-model="dialog"
                  max-width="500px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Add City
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form ref="form">
                          <v-row>

                            <v-col
                              cols="12"
                              sm="6"
                              md="6"
                            >
                              <v-select
                                :items="countryData"
                                v-model="editedItem.country_id"
                                label="Country"
                                required
                                :rules="[ (value) => !!value || 'This  field is required',]"
                              ></v-select>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="6"
                            >
                              <v-text-field
                                v-model="editedItem.en_name"
                                label="CityName(EN)"
                                required
                                :rules="[ (value) => !!value || 'This  field is required']"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="6"
                            >
                              <v-text-field
                                v-model="editedItem.ar_name"
                                label="City Name(AR)"
                                required
                                :rules="[ (value) => !!value || 'This  field is required']"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="6"
                            >
                              <v-text-field
                                v-model="editedItem.region"
                                label="Region"
                                required
                                :rules="[ (value) => !!value || 'This  field is required']"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="6"
                            >
                              <v-text-field
                                v-model="editedItem.ticket_value"
                                label="Ticket Value"
                                required
                                :rules="[ (value) => !!value || 'This  field is required',
                                (value) => (value && value <= 5) || 'maximum value is 5',]"
                              ></v-text-field>
                            </v-col>

                          </v-row>
                        </v-form>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog=false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="390px" persistent>
                  <v-card>
                    <v-card-title class="headline">Are you sure you want to delete this country?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialogDelete=false">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(item.id)"
              >
                mdi-delete
              </v-icon>
            </template>

          </v-data-table>
        </MaterialCard>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import MaterialCard from "~/components/base/MaterialCard";
export default {
  name: "City",
  middleware: ["auth"],
  components: {MaterialCard },
  data(){
    return{
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id',
        },
        { text: 'En Name', value: 'en_name' },
        { text: 'Ar Name', value: 'ar_name' },
        { text: 'Region', value: 'region' },
        { text: 'Ticket Value', value: 'ticket_value' },
        { text: 'Country', value: 'country_id.en_name' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        en_name: '',
        ar_name: '',
        region: '',
        ticket_value: '',
        country_id:'',

      },
      defaultItem: {
        en_name: '',
        ar_name: '',
        region: '',
        ticket_value: '',
        country_id: '',
      },
      cityData:[],
      cityId:[]
    }
  },
  created () {
    this.cityList()
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New City' : 'Edit City'
    },
    countryData(){
      let countries= this.$store.state.countries
      let arr = []
      countries.forEach(function (data) {
        arr.push({
          'value':data.id,
          'text': data.en_name,
        })
      })
      return arr
    },
  },
  methods: {
    cityList(){
      let data={
        path:"/cities",
      }
      this.$store.dispatch('list',data).then(response => {
        console.log('city list',response.data.data)
        this.cityData=response.data.data
        this.$store.commit("SHOW_LOADER", false);
        this.$store.commit("SHOW_SNACKBAR", {
          snackbar: true,
          color: "green",
          message: response.data.message
        });

      });
    },
    editItem (item) {
      this.editedIndex = 2
      // console.log('index',item.country_id.id)
      this.editedItem =item
      // this.editedItem.country_id=item.country_id.id
      // console.log('item',this.editedItem)

      this.dialog = true
    },
    async save () {
      if(this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          let data={
            path:"/city/"+this.editedItem.id,
            data:this.editedItem
          }
          data.data.country_id=data.data.country_id.id

          console.log(' data',data)
          this.dialog = false
          this.$store.commit("SHOW_LOADER", true);
          await this.$store.dispatch("update", data).then(response => {
            console.log('edit form res',response)

            this.$store.commit("SHOW_LOADER", false);
            this.$store.commit("SHOW_SNACKBAR", {
              snackbar: true,
              color: "green",
              message: response.data.message
            });
            this.cityList()
          });
        }
        else {
          let data={
            path:"/cities",
            data:this.editedItem
          }
          this.dialog = false
          this.$store.commit("SHOW_LOADER", true);
          await this.$store.dispatch("create", data).then(response => {
            this.$store.commit("SHOW_LOADER", false);
            this.$store.commit("SHOW_SNACKBAR", {
              snackbar: true,
              color: "green",
              message: response.data.message
            });
            this.cityList()
          });
        }
      }

    },

    deleteItem (id) {
      console.log('idss',id)
      this.cityId[0]=id
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    async deleteItemConfirm() {
      this.dialogDelete = false
      this.$store.commit("SHOW_LOADER", true);
      let data = {
        'ids': this.cityId,
        'path' : '/delete_cities'
      }
      await this.$store.dispatch("delete", data).then(response => {
        this.$store.commit("SHOW_LOADER", false);
        this.$store.commit("SHOW_SNACKBAR", {
          snackbar: true,
          color: "green",
          message: response.data.message
        });
        this.cityList()
      });
    },

  },
}
</script>

<style scoped>
.heading {
  font-size: 30px !important;
  color: white !important;
}
</style>
