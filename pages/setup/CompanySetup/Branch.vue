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
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Branch Name in Arabic"
                    name="login"
                    type="text"
                    required
                    class="direction"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Branch Name in English"
                    name="login"
                    type="text"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Manager"
                    name="login"
                    type="text"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="in English"
                    name="login"
                    type="text"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Address 1"
                    name="login"
                    type="text"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Address 2"
                    name="login"
                    type="text"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Address 3"
                    name="login"
                    type="text"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Address 4"
                    name="login"
                    type="text"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    name="login"
                    label="Telephone Number"
                    type="number"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    name="login"
                    label="Telephone Number"
                    type="number"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    name="login"
                    label="Telephone Number"
                    type="number"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Fax Number"
                    name="login"
                    type="number"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    name="login"
                    label="Fax Number"
                    type="number"
                    required
                  />
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
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Postal Code"
                    name="login"
                    type="text"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-select
                    :items="items"
                    label="State Region"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Email Address"
                    name="login"
                    type="text"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Web site/URL"
                    name="login"
                    type="text"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-select
                    :items="items"
                    label="Branch Status"
                  ></v-select>
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
  name: "Branch",
  middleware: ["auth"],
  components: {MaterialCard },
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>

<style scoped>
.direction {
  direction: rtl;
}
</style>
