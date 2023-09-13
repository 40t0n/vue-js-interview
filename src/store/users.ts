import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IUser } from '../lib/types';
// import { getUsers as fetchUsers } from '../api/users';

export const useUsersStore = defineStore('users', () => {
  const usersList = ref<IUser[]>([
    {
      id: 1,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      country: 'Russia',
      score: 20,
      address: 'address 1',
    },
    {
      id: 2,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      country: 'USA',
      score: 10,
      address: 'address 1',
    },
    {
      id: 3,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      subtitle:
        '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      country: 'Russia',
      score: 30,
      address: 'address 1',
    },
    {
      id: 4,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      title: 'Birthday gift',
      subtitle:
        '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      country: 'USA',
      score: 40,
      address: 'address 1',
    },
    {
      id: 5,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      title: 'Recipe to try',
      subtitle:
        '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      country: 'Russia',
      score: 50,
      address: 'address 1',
    },
  ]);

  // Получение пользователей
  // fetchUsers().then((list) => {
  //   if (Array.isArray(list)) {
  //     usersList.value = list;
  //   }
  // });

  return { usersList };
});
