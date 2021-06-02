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
          title="Company Info"
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
                    label="Company Name in Arabic"
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
                    label="Company Name in English"
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
                    label="Legal Company Name in Arabic"
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
                    label="Legal Company Name in English"
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
                    label="Type of business in Arabic"
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
                    label="Type of Business"
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
                    label="Date of incorporation"
                    name="login"
                    type="date"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-text-field
                    label="Company Logo"
                    name="login"
                    type="file"
                    required
                  />
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
  name: "CompanyInfo",
  middleware: ["auth"],
  components: {MaterialCard },

}
</script>

<style scoped>
.direction {
  direction: rtl;
}
</style>
