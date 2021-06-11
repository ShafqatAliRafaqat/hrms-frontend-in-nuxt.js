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
          title="Country Nationality"
          class="px-5 py-3"
        >
          <v-data-table
            :headers="headers"
            :items="countryData"
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
                      rounded
                    >
                      Add Country
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
                            <v-text-field
                              v-model="editedItem.en_name"
                              label="Country Name(EN)"
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
                              v-model="editedItem.en_nationality"
                              label="Country Nationality(EN)"
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
                              label="Country Name(AR)"
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
                              v-model="editedItem.ar_nationality"
                              label="Country Nationality(AR)"
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
                              v-model="editedItem.code"
                              label="Code"
                              required
                              :rules="[ (value) => !!value || 'This  field is required',
                                (value) => (value && value.length <= 3) || 'maximum 3 characters',]"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="6"
                          >
                            <v-text-field
                              v-model="editedItem.phonecode"
                              label="Phone Code"
                              required
                              :rules="[ (value) => !!value || 'This  field is required',
                                (value) => (value && value.length <= 3) || 'maximum 3 characters',]"
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
  name: "CountryNationality",
  components: {MaterialCard },
  middleware: ["auth"],
  data(){
    return{
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          // sortable: false,
          value: 'id',
        },
        { text: 'En Name', value: 'en_name' },
        { text: 'En Nationality', value: 'en_nationality' },
        { text: 'Ar Name', value: 'ar_name' },
        { text: 'Ar Nationality', value: 'ar_nationality' },
        { text: 'Code', value: 'code' },
        { text: 'Phone Code', value: 'phonecode' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        en_name: '',
        en_nationality: '',
        ar_name: '',
        ar_nationality: '',
        code: '',
        phonecode: '',

      },
      defaultItem: {
        en_name: '',
        en_nationality: '',
        ar_name: '',
        ar_nationality: '',
        code: '',
        phonecode: '',
      },
      countryId:[]
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Country' : 'Edit Country'
    },

    countryData(){
      return this.$store.state.countries
    },
  },

  watch: {
    // dialog (val) {
    //   val || this.close()
    // },
    // dialogDelete (val) {
    //   val || this.closeDelete()
    // },
  },

  created () {
    this.countryList()
  },

  methods: {
    countryList(){
      let data={
        path:"/all_countries",
      }
      this.$store.dispatch('list',data)
        .then(response => {
          console.log('yesss')
          console.log('cl',response)
        this.$store.commit("COUNTRIES_LIST", response.data.data);
        this.$store.commit("SHOW_LOADER", false);
        this.$store.commit("SHOW_SNACKBAR", {
          snackbar: true,
          color: "green",
          message: response.data.message
        });
      }).catch(error=>{

        console.log('Noooo')
        console.log('e',error)
        console.log('er',error.response)
        this.$store.commit('SHOW_LOADER', false)
        this.$store.commit('SHOW_SNACKBAR',{  snackbar:true,color:'red',message:error.response.data.message})
      });
    },
    async save () {
      if(this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          let data={
            path:"/country/"+this.editedItem.id,
            data:this.editedItem
          }
          console.log('edit form',this.editedItem.id)
          console.log('edit form data',this.editedItem)
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
            this.countryList()
          });
        }
        else {
          let data={
            path:"/countries",
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
            this.countryList()
          });
        }
      }

    },
    editItem (item) {
      this.editedIndex = 2
      // this.editedIndex =this.desserts.indexOf(item)
      // console.log('index',this.desserts.indexOf(item))
      this.editedItem =item
      this.dialog = true
    },
    deleteItem (id) {
      this.countryId[0]=id
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    async deleteItemConfirm() {
    this.dialogDelete = false
    this.$store.commit("SHOW_LOADER", true);

      let data = {
        'ids': this.countryId,
        'path' : '/delete_countries'
      }
    await this.$store.dispatch("delete", data).then(response => {
      this.$store.commit("SHOW_LOADER", false);
      this.$store.commit("SHOW_SNACKBAR", {
        snackbar: true,
        color: "green",
        message: response.data.message
      });
      this.countryList()
    });
    },

  },
}
</script>

<style scoped>
.direction {
  direction: rtl;
}
</style>
