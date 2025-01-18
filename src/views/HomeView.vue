<template>
  <div class="py-10">
    <div class="table-form-page">
      <div class="px-2 flex gap-2 justify-center">
        <!-- Search Function -->
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by name or email"
          class="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200 w-1/3"
        />
        <!-- Filter Function -->
        <select
          v-model="selectedGender"
          class="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200 w-1/4"
        >
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button class="text-normal font-thin border p-5 rounded-lg font-bold text-[#999]" @click="refresh">
          <span>Refresh</span>
        </button>
      </div>
    </div>
    <!-- Table Form -->
    <table
      class="table-auto w-full border-collapse p-2 max-w-[1200px] mx-auto flex-col border-separate border-spacing-2"
    >
      <thead>
        <tr class="">
          <th
            v-for="(field, key) in formFields"
            :key="key"
            class="text-left p-4 text-[#999] text-sm"
          >
            {{ field.label }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="user in filteredData"
          :key="user.login.uuid"
          class="cursor-pointer group bg-white rounded-lg shadow-lg mb-5"
          @click="openModal(user)"
        >
          <td class="p-6 border-gray-200 border-b shadow-b-only">
            {{ formatDate(user.dob.date) }}
          </td>
          <td
            class="p-6 border-gray-200 group-hover:text-[#35bad8] transition-colors border-b shadow-b-only"
          >
            {{ `${user.name.first} ${user.name.last}` }}
          </td>
          <td
            class="p-6 border-gray-200 group-hover:font-semibold transition-colors border-b shadow-b-only"
          >
            {{ user.gender }}
          </td>
          <td class="p-6 border-gray-200 border-b shadow-b-only">
            {{ user.location.country }}
          </td>
          <td class="p-6 border-gray-200 border-b shadow-b-only">
            {{ user.email }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Function -->
    <div class="flex justify-around items-center mt-4">
      <button
        :disabled="currentPage === 1"
        @click="currentPage--"
        class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="currentPage++"
        class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300"
      >
        Next
      </button>

      <!-- Popup Modal for more details-->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">
              {{ selectedUser?.name.first }} {{ selectedUser?.name.last }}
            </h2>
            <button
              @click="closeModal"
              class="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
          <div class="space-y-2">
            <p class="flex">
              <span class="text-[#999] w-1/4">Date:</span>
              <span class="w-1/4">
                {{ formatDate(selectedUser?.dob.date) }}
              </span>
            </p>
            <p class="flex">
              <span class="text-[#999] w-1/4">Status:</span>
              Inactive
            </p>
            <p class="flex">
              <span class="text-[#999] w-1/4">Gender:</span>
              <span class="w-1/4">{{ selectedUser?.gender }}</span>
            </p>
            <p class="flex">
              <span class="text-[#999] w-1/4">Country:</span>
              <span class="w-1/4">{{ selectedUser?.location.country }}</span>
            </p>
            <p class="flex">
              <span class="text-[#999] w-1/4">Email:</span>
              <span class="w-1/4">{{ selectedUser?.email }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
export default defineComponent({
  name: 'HomeView',
  computed: {
    filteredData() {
      return this.list.filter((user) => {
        const matchesSearch =
          user.name.first
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          user.name.last
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchQuery.toLowerCase());

        const matchesGender =
          this.selectedGender === '' || user.gender === this.selectedGender;

        return matchesSearch && matchesGender;
      });
    },

    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredData.slice(start, end);
    },

    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    },
  },
  data() {
    return {
      formFields: [
        { label: 'Date', style: 'w-1/4' },
        { label: 'Name', style: 'w-1/4' },
        { label: 'Gender', style: 'w-1/4' },
        { label: 'Country', style: 'w-1/4' },
        { label: 'Email', style: 'w-1/4' },
      ],
      list: [],
      searchQuery: '',
      selectedGender: '',
      currentPage: 1,
      itemsPerPage: 5,
      selectedUser: [],
      showModal: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        const totalPage = this.list.length > 20 ? this.list.length + 7 : 20;
        const response = await fetch(
          `https://randomuser.me/api/?page=${this.currentPage}&results=${totalPage}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        this.list = data.results;
      } catch (error) {
        console.error('Failed to fetch data:', error.message);
      }
    },
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    openModal(user) {
      this.selectedUser = user;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedUser = null;
    },
    refresh(){
      this.fetchData();
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    currentPage() {
      this.fetchData();
    },
  },
});
</script>
