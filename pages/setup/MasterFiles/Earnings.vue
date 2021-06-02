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
          title="Earnings/Benefits"
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
                    label="Earnings Types in Arabic"
                    class="direction"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Earnings Types in English"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-checkbox
                    label="W/value"
                    color="success"
                    value="success"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-checkbox
                    label="Use Factor?"
                    color="success"
                    value="success"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-checkbox
                    label="Fixed"
                    color="success"
                    value="success"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-checkbox
                    label="MB"
                    color="success"
                    value="success"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="% from Basic Salary"
                  type="number"
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
  name: "Earnings",
  components: {MaterialCard },
  middleware: ["auth"],
}
</script>

<style scoped>

</style>
