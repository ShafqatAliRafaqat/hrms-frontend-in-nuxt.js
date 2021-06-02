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
          title="Banks"
          class="px-5 py-3"
        >
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Bank Name in Arabic"
                    class="direction"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Bank Name in English"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-select
                    :items="items"
                    label="Account Type"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-select
                    :items="items"
                    label="Currency Type"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Account Number"
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Bank Code"
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="GL Account Code"
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-select
                    :items="items"
                    label="Bank File"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-select
                    :items="items"
                    label="Country"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Payment Type"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-select
                    :items="items"
                    label="City"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Address 1"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Address 2"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Address 3"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                  >
                    Create
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </MaterialCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MaterialCard from "../../../components/base/MaterialCard";
export default {
  name: "Banks",
  components: {MaterialCard },
  middleware: ["auth"],
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>

<style scoped>

</style>
