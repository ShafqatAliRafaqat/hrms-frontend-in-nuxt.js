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
          title="Branch"
          class="px-5 py-3"
        >
          <v-data-table
            :headers="headers"
            :items="allData"
            sort-by="en_name"
          >
            <template v-slot:top>
              <v-toolbar
                flat
              >
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
                      @click="reset"
                      rounded
                    >
                      Add Branch
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form ref="form">
                          <v-container class="py-0">
                            <v-row>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-select
                                  v-model="editedItem.company_id"
                                  :items="companies"
                                  :item-text="companies.text"
                                  :item-value="companies.value"
                                  label="Select Company"
                                ></v-select>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-select
                                  v-model="editedItem.country_id"
                                  :items="countries"
                                  :item-text="countries.text"
                                  :item-value="countries.value"
                                  label="Select Country"
                                ></v-select>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-select
                                  v-model="editedItem.city_id"
                                  :items="cities"
                                  :item-text="cities.text"
                                  :item-value="cities.value"
                                  label="Select City"
                                ></v-select>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="Branch Name in Arabic"
                                  class="direction"
                                  v-model="editedItem.ar_name"
                                  :rules="[ (value) => !!value || 'This  field is required',
                                (value) => (value && value.length <= 50) || 'maximum 50 characters',]"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="Branch Name in English"
                                  v-model="editedItem.en_name"
                                  :rules="[ (value) => !!value || 'This  field is required',
                                (value) => (value && value.length <= 50) || 'maximum 50 characters',]"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="Manager Name in Arabic"
                                  class="direction"
                                  v-model="editedItem.ar_manager_name"
                                  :rules="[ (value) => !!value || 'This  field is required',
                                (value) => (value && value.length <= 50) || 'maximum 50 characters',]"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="Manager Name in English"
                                  v-model="editedItem.en_manager_name"
                                  :rules="[ (value) => !!value || 'This  field is required',
                                (value) => (value && value.length <= 50) || 'maximum 50 characters',]"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="Address_1"
                                  v-model="editedItem.address_1"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="Address_2"
                                  v-model="editedItem.address_2"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="Address_3"
                                  v-model="editedItem.address_3"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="Address_4"
                                  v-model="editedItem.address_4"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="postal_code"
                                  type="number"
                                  v-model="editedItem.postal_code"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="state_region"
                                  v-model="editedItem.state_region"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="phone_1"
                                  v-model="editedItem.phone_1"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="phone_2"
                                  v-model="editedItem.phone_2"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="phone_3"
                                  v-model="editedItem.phone_3"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="fax_1"
                                  v-model="editedItem.fax_1"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="fax_2"
                                  v-model="editedItem.fax_2"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="fax_3"
                                  v-model="editedItem.fax_3"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="email"
                                  v-model="editedItem.email"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="website"
                                  v-model="editedItem.website"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="status"
                                  v-model="editedItem.status"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="remarks_1"
                                  v-model="editedItem.remarks_1"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="remarks_2"
                                  v-model="editedItem.remarks_2"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="remarks_3"
                                  v-model="editedItem.remarks_3"
                                ></v-text-field>
                              </v-col>

                            </v-row>
                          </v-container>
                        </v-form>

                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                        rounded
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                        rounded
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="390px" persistent>
                  <v-card>
                    <v-card-title class="headline">Are you sure you want to delete this record?</v-card-title>
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
import MaterialCard from "../../../components/base/MaterialCard";
import Vue from "vue";
export default {
  name: "Branch",
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
        { text: 'en_manager_name', value: 'en_manager_name' },
        { text: 'ar_manager_name', value: 'ar_manager_name' },
        { text: 'address_1', value: 'address_1' },
        { text: 'address_2', value: 'address_2' },
        { text: 'address_3', value: 'address_3' },
        { text: 'address_4', value: 'address_4' },
        { text: 'postal_code', value: 'postal_code' },
        { text: 'state_region', value: 'state_region' },
        { text: 'phone_1', value: 'phone_1' },
        { text: 'phone_2', value: 'phone_2' },
        { text: 'phone_3', value: 'phone_3' },
        { text: 'fax_1', value: 'fax_1' },
        { text: 'fax_2', value: 'fax_2' },
        { text: 'fax_3', value: 'fax_3' },
        { text: 'email', value: 'email' },
        { text: 'website', value: 'website' },
        { text: 'status', value: 'status' },
        { text: 'remarks_1', value: 'remarks_1' },
        { text: 'remarks_2', value: 'remarks_2' },
        { text: 'remarks_3', value: 'remarks_3' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        en_name: '',
        ar_name: '',
        en_manager_name: '',
        ar_manager_name: '',
        address_1: '',
        address_2: '',
        address_3: '',
        address_4: '',
        postal_code: '',
        state_region: '',
        country_id: '',
        city_id: '',
        company_id: '',
        phone_1: '',
        phone_2: '',
        phone_3: '',
        fax_1: '',
        fax_2: '',
        fax_3: '',
        email: '',
        website: '',
        status: '',
        remarks_1: '',
        remarks_2: '',
        remarks_3: '',
      },
      countryId:[],
      allData: [],
      companies: [],
      countries: [],
      cities: []
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Branch' : 'Edit Branch'
    }
  },
  created () {
    this.getCompanies()
    this.getCountries()
    this.getCities()
    this.getList()
  },
  methods: {
    getCompanies () {
      let arr = []
      let data = { path: "/companies" }
      this.$store.dispatch('list',data).then(response => {
        response.data.data.forEach(data => {
          arr.push({
            text : data.en_name +' '+ data.ar_name,
            value: data.id
          })
        })
        this.companies = arr
      })
    },
    getCountries () {
      let arr = []
      let data = { path: "/all_countries" }
      this.$store.dispatch('list',data).then(response => {
        response.data.data.forEach(data => {
          arr.push({
            text : data.en_name +' '+ data.ar_name,
            value: data.id
          })
        })
        this.countries = arr
      })
    },
    getCities () {
      let arr = []
      let data = { path: "/cities" }
      this.$store.dispatch('list',data).then(response => {
        response.data.data.forEach(data => {
          arr.push({
            text : data.en_name +' '+ data.ar_name,
            value: data.id
          })
        })
        this.cities = arr
      })
    },

    getList(){
      let data = { path: "/company_branches" }
      this.$store.dispatch('list',data).then(response => {
        this.allData = response.data.data
        this.$store.commit("SHOW_LOADER", false);
        this.$store.commit("SHOW_SNACKBAR", {
          snackbar: true,
          color: "green",
          message: response.data.message
        });
      });
    },
    async save () {
      if(this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          let data={
            path:"/company_branch/"+this.editedItem.id,
            data:this.editedItem
          }
          this.dialog = false
          this.$store.commit("SHOW_LOADER", true);
          await this.$store.dispatch("update", data).then(response => {
            this.$store.commit("SHOW_LOADER", false);
            this.$store.commit("SHOW_SNACKBAR", {
              snackbar: true,
              color: "green",
              message: response.data.message
            });
            this.getList()
          });
        }
        else {
          let data={
            path:"/company_branches",
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
            this.getList()
          });
        }
      }

    },
    editItem (item) {
      this.editedIndex = 2
      // this.editedIndex =this.desserts.indexOf(item)
      // console.log('index',this.desserts.indexOf(item))
      this.editedItem = Vue.util.extend({}, item);
      this.editedItem.company_id = item.company_id.id
      this.editedItem.country_id = item.country_id.id
      this.editedItem.city_id = item.city_id.id

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
        'path' : '/delete_company_branches'
      }
      await this.$store.dispatch("delete", data).then(response => {
        this.$store.commit("SHOW_LOADER", false);
        this.$store.commit("SHOW_SNACKBAR", {
          snackbar: true,
          color: "green",
          message: response.data.message
        });
        this.getList()
      });
    },
    reset() {
      this.editedItem.en_name = ''
      this.editedItem.ar_name = ''
      this.editedItem.en_manager_name = ''
      this.editedItem.ar_manager_name = ''
      this.editedItem.address_1 = ''
      this.editedItem.address_2 = ''
      this.editedItem.address_3 = ''
      this.editedItem.address_4 = ''
      this.editedItem.postal_code = ''
      this.editedItem.state_region = ''
      this.editedItem.country_id = ''
      this.editedItem.city_id = ''
      this.editedItem.company_id = ''
      this.editedItem.phone_1 = ''
      this.editedItem.phone_2 = ''
      this.editedItem.phone_3 = ''
      this.editedItem.fax_1 = ''
      this.editedItem.fax_2 = ''
      this.editedItem.fax_3 = ''
      this.editedItem.email = ''
      this.editedItem.website = ''
      this.editedItem.remarks_1 = ''
      this.editedItem.remarks_2 = ''
      this.editedItem.remarks_3 = ''
      this.editedItem.status = ''
      this.countryId = []
      this.editedIndex = -1
    }
  },
}
</script>

<style scoped>
.direction {
  direction: rtl;
}
</style>
