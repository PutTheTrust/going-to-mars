describe("Home Page Tests", () => {
  /// Check header title
  it("should have witty title", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="heading"')
      .should("exist")
      .should("have.text", "Red Frontier: Conquering the Martian Mystique");
  });

  /// Initial State
  it("should have two tasks", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="task-1"').should("exist");
    cy.get('[data-testid="task-5"').should("exist");

    cy.get('[data-testid="num-tasks"')
      .should("exist")
      .should("have.text", "Number of tasks (2)");
  });

  /// Create a new Task
  it("should create a new task", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("button", "Add").click();

    // Enter data into inputs
    cy.get("#title").type("Title 1");
    cy.get("#description").type("A Description");

    cy.get("#creator").type("Luke");
    cy.get("#assigned").type("R2D2");

    cy.contains("button", "Create Task").click();

    cy.get('[data-testid="num-tasks"')
      .should("exist")
      .should("have.text", "Number of tasks (3)");
  });

  /// Delete All Tasks
  it("should delete all tasks", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("button", "Delete All Tasks").click();

    cy.get('[data-testid="num-tasks"')
      .should("exist")
      .should("have.text", "Number of tasks (0)");

    cy.get(".tasks__empty").should("exist").should("have.text", "No Tasks yet");
  });

  /// Delete Single Task
  it("should delete task", () => {
    cy.visit("http://localhost:3000/");

    // click first edit button
    cy.get('[data-testid="delete-5"]').click();

    cy.get('[data-testid="num-tasks"')
      .should("exist")
      .should("have.text", "Number of tasks (1)");
  });
});
