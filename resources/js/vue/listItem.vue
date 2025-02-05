<template>
  <div>
    <div class="item">
      <input
        type="checkbox"
        @change="updateCheck"
        v-model="item.completed"
      />
      <div class="itemDetails">
        <span :class="[item.completed ? 'completed' : '', 'itemText']">
          {{ item.name }}
        </span>
        <div class="itemMeta">
          <p>
            {{ $t('status') }}:
            <span :class="item.status">
              {{ formatStatus(item.status) }}
            </span>
          </p>
          <p>
            {{ $t('deadline') }}: {{ formatDate(item.deadline) }}
          </p>
          <p>
            {{ $t('createdAt') }}: {{ formatDate(item.created_at) }}
          </p>
        </div>
      </div>
      <div class="itemActions">
        <button @click="openEditModal" class="editItem">
          <font-awesome-icon icon="edit" />
        </button>
        <button @click="removeItem" class="trashItem">
          <font-awesome-icon icon="trash" />
        </button>
      </div>
    </div>

    <div v-if="showEditModal" class="modal-overlay">
      <div class="modal-content">
        <span class="close" @click="closeEditModal">&times;</span>
        <h2>{{ $t('editItem') }}</h2>

        <input
          type="text"
          v-model="currentItem.name"
          :placeholder="$t('enterItemName')"
        />

        <label for="status">
          {{ $t('status') }}:
        </label>
        <select id="status" v-model="currentItem.status">
          <option value="pending">{{ $t('statusPending') }}</option>
          <option value="in-progress">{{ $t('statusInProgress') }}</option>
          <option value="done">{{ $t('statusDone') }}</option>
        </select>

        <label for="deadline">
          {{ $t('deadline') }}:
        </label>
        <input
          type="date"
          id="deadline"
          v-model="currentItem.deadline"
        />

        <button @click="confirmEditItem">{{ $t('saveChanges') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['item'],
    data() {
      return {
        showEditModal: false,
        currentItem: { ...this.item },
      }
    },
    methods: {
      async updateCheck() {
        await this.$store.dispatch('updateItem', this.item)
        this.$emit('itemchanged')
      },

      async removeItem() {
        await this.$store.dispatch('removeItem', this.item.id)
        this.$emit('itemchanged')
      },
      
      openEditModal() {
        this.currentItem = {
          ...this.item,
          deadline: moment(this.item.deadline).format('YYYY-MM-DD'),
        }
        this.showEditModal = true
      },
      closeEditModal() {
        this.showEditModal = false
      },
      async confirmEditItem() {
        if (this.currentItem.name === '' || this.currentItem.deadline === '') {
          alert(this.$t('nameAndDeadlineRequired'))
          return
        }

        try {
          this.currentItem.deadline = moment(this.currentItem.deadline).format('YYYY-MM-DD')
          await this.$store.dispatch('updateItem', this.currentItem)
          this.showEditModal = false
          this.$emit('itemchanged')
        } catch (error) {
          console.error('Error confirming item update:', error)
          alert(this.$t('failedToUpdateItem', {
            message: error.response?.data?.message || error.message,
          }))
        }
      },
      formatStatus(status) {
        switch (status) {
          case 'pending':
            return this.$t('statusPending')
          case 'in-progress':
            return this.$t('statusInProgress')
          case 'done':
            return this.$t('statusDone')
          default:
            return this.$t('statusUnknown')
        }
      },
      formatDate(date) {
        return moment(date).format('DD-MM-YYYY')
      },
    },
  }
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
    color: #999999;
  }

  .itemText {
    width: 100%;
    margin-left: 20px;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .itemDetails {
    flex: 1;
  }

  .itemMeta {
    margin-top: 5px;
    font-size: 0.9em;
    color: #666;
  }

  .itemMeta p {
    margin: 2px 0;
  }

  .itemMeta .pending {
    color: orange;
  }

  .itemMeta .in-progress {
    color: blue;
  }

  .itemMeta .done {
    color: green;
  }

  .itemActions {
    display: flex;
    gap: 10px;
  }

  .editItem,
  .trashItem {
    background: #e6e6e6;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .editItem {
    color: #007bff;
  }

  .trashItem {
    color: #ff0000;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 400px;
    position: relative;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>
