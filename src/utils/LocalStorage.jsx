

const employees = [
  {
      "id": 1,
      "firstName": "Arjun",
      "email": "e@e.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Update website",
              "taskDescription": "Revamp the homepage design",
              "taskDate": "2024-10-12",
              "category": "Design" 
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Client meeting",
              "taskDescription": "Discuss project requirements",
              "taskDate": "2024-10-10",
              "category": "Meeting"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Fix bugs",
              "taskDescription": "Resolve bugs reported in issue tracker",
              "taskDate": "2024-10-14",
              "category": "Development"
          }
      ]
  },
  {
      "id": 2,
      "firstName": "Sneha",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts": {
          "active": 1,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Database optimization",
              "taskDescription": "Optimize queries for better performance",
              "taskDate": "2024-10-11",
              "category": "Database"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Design new feature",
              "taskDescription": "Create mockups for the new feature",
              "taskDate": "2024-10-09",
              "category": "Design"
          }
      ]
  },
  {
      "id": 3,
      "firstName": "Ravi",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Prepare presentation",
              "taskDescription": "Prepare slides for upcoming client presentation",
              "taskDate": "2024-10-13",
              "category": "Presentation"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Code review",
              "taskDescription": "Review the codebase for optimization",
              "taskDate": "2024-10-12",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Testing",
              "taskDescription": "Test the latest build for bugs",
              "taskDate": "2024-10-08",
              "category": "QA"
          }
      ]
  },
  {
      "id": 4,
      "firstName": "Priya",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Write documentation",
              "taskDescription": "Update the project documentation",
              "taskDate": "2024-10-13",
              "category": "Documentation"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Set up CI/CD",
              "taskDescription": "Implement continuous integration pipeline",
              "taskDate": "2024-10-11",
              "category": "DevOps"
          }
      ]
  },
  {
      "id": 5,
      "firstName": "Karan",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "UI redesign",
              "taskDescription": "Redesign the user interface for better UX",
              "taskDate": "2024-10-14",
              "category": "Design"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Deploy new build",
              "taskDescription": "Deploy the latest build to production",
              "taskDate": "2024-10-09",
              "category": "DevOps"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Client feedback",
              "taskDescription": "Gather feedback from clients after product launch",
              "taskDate": "2024-10-12",
              "category": "Support"
          }
      ]
  }
];


const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}





























// const employees = [
//     {
//       "id": 1,
//       "email": "employee1@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "taskTitle": "Fix homepage bug",
//           "taskDescription": "Resolve layout issue on the homepage.",
//           "taskDate": "2025-02-16",
//           "category": "Development",
//           "active": true,
//           "newTask": false,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Write API documentation",
//           "taskDescription": "Complete the API documentation for v2.0 release.",
//           "taskDate": "2025-02-17",
//           "category": "Documentation",
//           "active": false,
//           "newTask": true,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Deploy staging server",
//           "taskDescription": "Set up and deploy the staging environment.",
//           "taskDate": "2025-02-18",
//           "category": "DevOps",
//           "active": false,
//           "newTask": false,
//           "completed": true,
//           "failed": false
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "email": "employee2@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "taskTitle": "Create social media plan",
//           "taskDescription": "Develop a content strategy for social media.",
//           "taskDate": "2025-02-16",
//           "category": "Marketing",
//           "active": true,
//           "newTask": false,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Prepare client report",
//           "taskDescription": "Analyze client data and generate insights.",
//           "taskDate": "2025-02-19",
//           "category": "Analytics",
//           "active": false,
//           "newTask": true,
//           "completed": false,
//           "failed": false
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "email": "employee3@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "taskTitle": "Fix server downtime",
//           "taskDescription": "Investigate and resolve server crash issue.",
//           "taskDate": "2025-02-16",
//           "category": "IT",
//           "active": true,
//           "newTask": false,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Update security patches",
//           "taskDescription": "Ensure all systems are patched for security.",
//           "taskDate": "2025-02-18",
//           "category": "Security",
//           "active": false,
//           "newTask": false,
//           "completed": true,
//           "failed": false
//         },
//         {
//           "taskTitle": "Optimize database queries",
//           "taskDescription": "Reduce response times by optimizing SQL queries.",
//           "taskDate": "2025-02-20",
//           "category": "Database",
//           "active": false,
//           "newTask": true,
//           "completed": false,
//           "failed": false
//         }
//       ]
//     },
//     {
//       "id": 4,
//       "email": "employee4@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "taskTitle": "Design new logo",
//           "taskDescription": "Create a modern logo for branding.",
//           "taskDate": "2025-02-16",
//           "category": "Design",
//           "active": true,
//           "newTask": false,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Finalize UX wireframes",
//           "taskDescription": "Ensure wireframes meet product specifications.",
//           "taskDate": "2025-02-19",
//           "category": "UI/UX",
//           "active": false,
//           "newTask": false,
//           "completed": true,
//           "failed": false
//         },
//         {
//           "taskTitle": "Create branding guidelines",
//           "taskDescription": "Define typography, color scheme, and design elements.",
//           "taskDate": "2025-02-21",
//           "category": "Branding",
//           "active": false,
//           "newTask": true,
//           "completed": false,
//           "failed": false
//         }
//       ]
//     },
//     {
//       "id": 5,
//       "email": "employee5@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "taskTitle": "Review financial statements",
//           "taskDescription": "Analyze Q1 financial reports and provide insights.",
//           "taskDate": "2025-02-16",
//           "category": "Finance",
//           "active": true,
//           "newTask": false,
//           "completed": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Audit expense records",
//           "taskDescription": "Check expense reports for discrepancies.",
//           "taskDate": "2025-02-18",
//           "category": "Accounting",
//           "active": false,
//           "newTask": false,
//           "completed": true,
//           "failed": false
//         },
//         {
//           "taskTitle": "Plan budget strategy",
//           "taskDescription": "Outline budget allocations for next quarter.",
//           "taskDate": "2025-02-22",
//           "category": "Finance",
//           "active": false,
//           "newTask": true,
//           "completed": false,
//           "failed": false
//         }
//       ]
//     }
//   ];
  
//   const admin = [{
//     "id": 1,
//     "email": "admin@example.com",
//     "password": "123"
//   }];
  
//     export const setLocalStorage  = () => {
//         localStorage.setItem('employees', JSON.stringify(employees));
//         localStorage.setItem('admin', JSON.stringify(admin));
//     };
    
//     export const getLocalStorage = () => {
//      const employees =  JSON.parse( localStorage.getItem('employees'))
//      const admin =  JSON.parse( localStorage.getItem('admin'))

//     return {employees,admin}
     
//     };
  