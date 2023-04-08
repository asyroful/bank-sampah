import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'
import login from '../pages/login'
import register from '../pages/master/register'
import home from '../pages/home'
import trash from '../pages/trash/trash'
import addTrash from '../pages/trash/addTrash'
import medicine from '../pages/medicine/medicine'
import addMedicine from '../pages/medicine/addMedicine'
import patientData from '../pages/patient/patientData'
import addPatientData from '../pages/patient/addPatientData'
import doctorData from '../pages/doctor/doctorData'
import addDoctorData from '../pages/doctor/addDoctorData'
import adminData from '../pages/admin/adminData'
import addAdminData from '../pages/admin/addAdminData'
import pharmacistData from '../pages/pharmacist/pharmacistData'
import addPharmacistData from '../pages/pharmacist/addPharmacistData'
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
          name: 'Medicine',
          path: '/medicine',
          component:medicine
        },
        {
          name: 'Add Medicine',
          path: '/medicine/add',
          component:addMedicine
        },
        {
          name: 'Patient Data',
          path: '/patient',
          component:patientData,
        },
        {
          name: 'Add Patient Data',
          path: '/patient/add',
          component:addPatientData
        },
        {
          name: 'Doctor Data',
          path: '/doctor',
          component:doctorData
        },
        {
          name: 'Add Doctor Data',
          path: '/doctor/add',
          component:addDoctorData
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
          name: 'Pharmacist Data',
          path: '/pharmacist',
          component:pharmacistData
        },
        {
          name: 'Add Pharmacist Data',
          path: '/pharmacist/add',
          component:addPharmacistData
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
  