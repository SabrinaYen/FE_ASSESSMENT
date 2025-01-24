<template>
  <div class="py-10">
    <div class="table-form-page my-5">
      <div class="w-full flex justify-center gap-5">
        <!-- Search Function -->
        <input type="text" v-model="searchQuery" placeholder="Search by name or email"
          class="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200 w-full" />
        <!-- Filter Function -->
        <select v-model="selectedGender"
          class="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200 w-1/4">
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
    <!-- Table Form -->
    <table class="table-auto w-full border-collapse p-2 flex-col border-spacing-4 px-[120px]">
      <thead>
        <tr class="">
          <th v-for="(field, key) in formFields" :key="key"
            class="text-left p-4 text-[#999] text-sm font-light font-normal">
            {{ field.label }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in filteredData" :key="user.login.uuid"
          class="cursor-pointer group rounded-lg hover:border-[#35bad8] transition-colors border-2 border-transparent  shadow mb-5 font-extralight"
          @click="openModal(user)">
          <td class="p-8 text-[#CBCBCB]">
            {{ formatDate(user.dob.date) }}
          </td>
          <td class="p-8 group-hover:text-[#35bad8] group-hover:font-semibold transition-colors capitalize">
            {{ `${user.name.first} ${user.name.last}` }}
          </td>
          <td class="p-8 group-hover:font-semibold group-hover:text-[#000] transition-colors text-[#CBCBCB] capitalize">
            {{ user.gender }}
          </td>
          <td class="p-8 capitalize">
            {{ user.location.country }}
          </td>
          <td class="p-8 text-[#CBCBCB] ">
            {{ user.email }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Function TODO: pagination with slot refresh button-->
    <!-- <div class="flex justify-around items-center mt-4">
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
    </div> -->
    <!-- Popup Modal for more details-->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">
            {{ selectedUser?.name.first }} {{ selectedUser?.name.last }}
          </h2>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
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
    <!-- Refresh Button -->
    <div class="w-full flex justify-center">
      <button class="w-[120px] h-[50px] rounded mt-5 bg-[#35bad8] flex justify-center items-center gap-2" @click="refresh">
        <IconRefresh width="24" height="24" fill="#FFFFFF" />
        <span class="text-white text-md">Refresh</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
import IconRefresh from '@/components/IconSvg/IconRefresh.vue';
export default defineComponent({
  name: 'HomeView',
  components:{
    IconRefresh
  },
  computed: {
    filteredData(): Array<Record<string, any>> {
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

    paginatedData(): Array<Record<string, any>> {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredData.slice(start, end);
    },

    totalPages(): number {
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
      list: [] as Array<Record<string, any>>,
      searchQuery: '',
      selectedGender: '',
      currentPage: 1,
      itemsPerPage: 5,
      selectedUser: null as Record<string, any> | null,
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
      } catch (error: any) {
        console.error('Failed to fetch data:', error.message);
      }
    },
    formatDate(date: string) {
      return moment(date).format('DD MMM YYYY');
    },
    openModal(user: Record<string, any>) {
      this.selectedUser = user;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedUser = null;
    },
    refresh() {
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
