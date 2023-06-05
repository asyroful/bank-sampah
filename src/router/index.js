import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'
import login from '../pages/login'
import register from '../pages/master/register'
import home from '../pages/home'
import trash from '../pages/trash/trash'
import addTrash from '../pages/trash/addTrash'
import trashTransaction from '../pages/trashTransaction/trashTransaction'
import addTrashTransaction from '../pages/trashTransaction/addTrashTransaction'
import withdrawal from '../pages/withdrawal/withdrawal'
import upload from '../pages/withdrawal/upload'
import inputDate from '../pages/withdrawal/inputDate'
import adminData from '../pages/admin/adminData'
import addAdminData from '../pages/admin/addAdminData'
import customer from '../pages/customer/customer'
import addCustomer from '../pages/customer/addCustomer'
import report from '../pages/report/report'

  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
        {
          name: 'Home',
          path: '/home',
          component:home
        },
        {
          name: 'Trash',
          path: '/trash',
          component:trash
        },
        {
          name: 'Add Trash',
          path: '/trash/add',
          component:addTrash
        },
        {
          name: 'Trash Transaction',
          path: '/transaction',
          component:trashTransaction
        },
        {
          name: 'Add Trash Transaction',
          path: '/transaction/add',
          component:addTrashTransaction
        },
        {
          name: 'Withdrawal',
          path: '/withdrawal',
          component:withdrawal,
        },
        {
          name: 'Upload',
          path: '/withdrawal/upload',
          component:upload,
        },
        {
          name: 'Input Date',
          path: '/withdrawal/inputDate',
          component:inputDate,
        },
        {
          name: 'Admin Data',
          path: '/admin',
          component:adminData
        },
        {
          name: 'Add Admin Data',
          path: '/admin/add',
          component:addAdminData
        },
        {
          name: 'Customer Data',
          path: '/customer',
          component:customer
        },
        {
          name: 'Add Customer Data',
          path: '/customer/add',
          component:addCustomer
        },
        {
          name: 'Report',
          path: '/report',
          component:report
        },
      ]
    },
    {
      name: 'Login',
      path: '/login',
      component: login,
    },      
    {
      name: 'Register',
      path: '/register',
      component: register,
    }      
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = true

//   if(to.name !== 'Login' && !isAuthenticated ) next({ name: 'Login'})
//   if(to.name === 'Login' && isAuthenticated ) next({ name: 'Home'})
//   else next();
// })
  