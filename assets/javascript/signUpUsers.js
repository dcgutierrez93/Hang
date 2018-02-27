// $(document).read(function() {
//     var firstNameInput = $("first_name");
//     var lastNameInput = $("last_name");
//     var emailInput = $("email");
//     var phoneInput = $("phonenumber");
//
//     // Add the even listener
//     $(document).("submit", "#user-form", handleUserFormSubmit);
//
//     getUsers();
//
//     function handleUserFormSubmit(event) {
//         event.preventDefault();
//
//         if (!firstNameInput.val().trim().trim()) {
//             return;
//         } else if (!lastNameInput.val().trim().trim()) {
//             return;
//         } else if (!emailInput.val().trim().trim()) {
//             return;
//         } else if (!phoneInput.val().trim().trim()) {
//             return;
//         }
//
//         upsertUser({
//             firstname: firstNameInput
//                 .val()
//                 .trim()
//         });
//     }
// });
