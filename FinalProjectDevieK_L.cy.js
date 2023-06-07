

describe('Login', () => {
  it('Should login successfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Ganti URL

    // Mengisi formulir login (TC01)
    cy.get('input[name="username"]').type('Admin') // Ganti "username" dengan nama pengguna yang valid
    cy.get('input[name="password"]').type('admin123') // Ganti "password" dengan kata sandi yang valid

    // Menekan tombol login (TC01)
    cy.get('button[type="submit"]').click()

    //membuka sidemenu (TC02)
    cy.get('.oxd-main-menu') // pilih class. pake titik depannya
      .contains('PIM') // Ganti dengan teks yang sesuai dengan tombol yang ingin diklik di side menu
      .click()

    // menambahkan employee (TC02)
      cy.get('.orangehrm-header-container > .oxd-button')
      .click()

    //mengisi formulir add employee
    cy.get('input[name="firstName"]').type('Devie') // Input Firstname
    cy.get('input[name="middleName"]').type('Yanti') // Input Middlename
    cy.get('input[name="lastName"]').type('Librianti') // Input Last name
    cy.get('button[type="submit"]').click()

//membuka sidemenu (TC 03)
cy.get('.oxd-main-menu') // pilih class. pake titik depannya
.contains('PIM') // Ganti dengan teks yang sesuai dengan tombol yang ingin diklik di side menu
.click()

// menambahkan employee (TC03)
cy.get('.orangehrm-header-container > .oxd-button')
.click()

//mengisi formulir add employee (TC03)
cy.get('input[name="firstName"]').type('Devie') // Input Firstname
cy.get('input[name="lastName"]').type('Librianti') // Input Last name
cy.get('button[type="submit"]').click()

//membuka sidemenu TC (04)
cy.get('.oxd-main-menu') // pilih class. pake titik depannya
.contains('PIM') // Ganti dengan teks yang sesuai dengan tombol yang ingin diklik di side menu
.click()

// menambahkan employee (TC04)
cy.get('.orangehrm-header-container > .oxd-button')
.click()

//mengisi formulir add employee (TC04)
cy.get('input[name="firstName"]').type('Devie') // Input Firstname
cy.get('button[type="submit"]').click()

//membuka sidemenu TC (05)
cy.get('.oxd-main-menu') // pilih class. pake titik depannya
.contains('PIM') // Ganti dengan teks yang sesuai dengan tombol yang ingin diklik di side menu
.click()

// menambahkan employee (TC05)
cy.get('.orangehrm-header-container > .oxd-button')
.click()

//mengisi formulir add employee (TC05)
cy.get('input[name="firstName"]').type('Devie') // Input Firstname
cy.get('input[name="lastName"]').type('Librianti') // Input Last name
cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('0005')
cy.get('button[type="submit"]').click()


//membuka sidemenu (TC06)
cy.get('.oxd-main-menu') // pilih class. pake titik depannya
.contains('PIM') // Ganti dengan teks yang sesuai dengan tombol yang ingin diklik di side menu
.click()

// menambahkan employee (TC06)
cy.get('.orangehrm-header-container > .oxd-button')
.click()

//mengisi formulir add employee (TC06)
cy.get('input[name="firstName"]').type('Devie') // Input Firstname
cy.get('input[name="lastName"]').type('Librianti') // Input Last name
// geser slider (TC06)
cy.get('.oxd-switch-input')
.click()
cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('devlib')
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('devlib123')
cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('devlib123')
cy.get('button[type="submit"]').click()

//membuka sidemenu (TC07)
cy.get('.oxd-main-menu') // pilih class. pake titik depannya
.contains('PIM') // Ganti dengan teks yang sesuai dengan tombol yang ingin diklik di side menu
.click()

// menambahkan employee (TC07)
cy.get('.orangehrm-header-container > .oxd-button')
.click()

//mengisi formulir add employee (TC07)
cy.get('input[name="firstName"]').type('Devie') // Input Firstname
cy.get('input[name="lastName"]').type('Librianti') // Input Last name
// geser slider (TC07)
cy.get('.oxd-switch-input')
.click()
cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('devli')
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('devlib12')
cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('devlib123')
cy.get('button[type="submit"]').click()

//membuka sidemenu TC (08)
cy.get('.oxd-main-menu') // pilih class. pake titik depannya
.contains('PIM') // Ganti dengan teks yang sesuai dengan tombol yang ingin diklik di side menu
.click()


cy.get(':nth-child(20) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})

//mengisi formulir add employee (TC08)
cy.get('input[name="firstName"]').type('Devie yuhu') // Input Firstname
cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

//membuka sidemenu TC (09)
cy.get('.oxd-main-menu') // pilih class. pake titik depannya
.contains('PIM') // Ganti dengan teks yang sesuai dengan tombol yang ingin diklik di side menu
.click()


cy.get(':nth-child(20) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})

//mengisi field nickname (TC09)
cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('dconatsir')//input nickname
cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()


 //membuka sidemenu TC (TC10)
 cy.get('.oxd-main-menu') // pilih class. pake titik depannya
 .contains('PIM') // Ganti dengan teks yang sesuai dengan tombol yang ingin diklik di side menu
 .click()



 cy.get(':nth-child(20) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})

 //mengisi formulir edit employee (TC10)
 cy.get('input[name="firstName"]').clear();
 cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
  })
})


    
  


