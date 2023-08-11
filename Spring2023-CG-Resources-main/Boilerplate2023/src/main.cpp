#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <iostream>

#include <shader.h>
#include <camera.h>

void framebuffer_size_callback(GLFWwindow *window, int width, int height);
void mouse_callback(GLFWwindow* window, double xpos, double ypos);
void scroll_callback(GLFWwindow* window, double xoffset, double yoffset);
void processInput(GLFWwindow *window);
void moveModel(int dir, float deltaTime);
void resetState();

// settings
const unsigned int SCR_WIDTH = 800;
const unsigned int SCR_HEIGHT = 600;

// Half the len of prism
const float prismLen = 0.5f;

// camera
Camera camera(glm::vec3(0.0f, 0.0f, 3.0f));
float lastX = SCR_WIDTH / 2.0f;
float lastY = SCR_HEIGHT / 2.0f;
bool firstMouse = true;
// timing
float deltaTime = 0.0f; // time between current frame and last frame
float lastFrame = 0.0f;

// Globals
glm::mat4 model, view, projection;
glm::vec3 pos;
float angle;
bool outOfPlace = false;
bool modelSpin = false;
bool camSpin = false;
bool lines = false;

int main(int argc, char **argv)
{
    // Validating argument
    if (argc != 2)
    {
        std::cout << "Incorrect !! -->  ./app <n> (n - no. of sides of the polygon)" << std::endl;
        exit(0);
    }
    // Prism n sides
    int n = atoi(argv[1]);
    // glfw: initialize and configure
    // ------------------------------
    glfwInit();
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

#ifdef _APPLE_
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
#endif

    // glfw window creation
    // --------------------
    GLFWwindow *window = glfwCreateWindow(SCR_WIDTH, SCR_HEIGHT, "Mr.Singh's GL", NULL, NULL);

    if (window == NULL)
    {
        std::cout << "Failed to create GLFW window" << std::endl;
        glfwTerminate();
        return -1;
    }
    glfwMakeContextCurrent(window);
    glfwSetFramebufferSizeCallback(window, framebuffer_size_callback); // Register function to handle viewport with change in dimensions
    glfwSetCursorPosCallback(window, mouse_callback);
    glfwSetScrollCallback(window, scroll_callback);

    // tell GLFW to capture our mouse
    glfwSetInputMode(window, GLFW_CURSOR, GLFW_CURSOR_DISABLED);

    // glad: load all OpenGL function pointers
    // ---------------------------------------
    if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
    {
        std::cout << "Failed to initialize GLAD" << std::endl;
        return -1;
    }

    // OpenGL Config
    // blending
    // -----------------------------
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    // configure global opengl state
    // -----------------------------
    glEnable(GL_DEPTH_TEST);

    // build and compile our shader zprogram
    // ------------------------------------
    Shader ourShader("../src/vertex.shader", "../src/fragment.shader");

    // set up vertex data (and buffer(s)) and configure vertex attributes
    // ------------------------------------------------------------------
    float vertices[4 * n][18];
    for (int i = 0; i < n; i++)
    {
        vertices[i][0] = 0;
        vertices[i][1] = 0;
        vertices[i][2] = prismLen;
        vertices[i][3] = 1;
        vertices[i][4] = 1;
        vertices[i][5] = 0;
        vertices[i][6] = 0.5 * cos(i * 2 * M_PI / n);
        vertices[i][7] = 0.5 * sin(i * 2 * M_PI / n);
        vertices[i][8] = prismLen;
        vertices[i][9] = 1;
        vertices[i][10] = 1;
        vertices[i][11] = 0;
        vertices[i][12] = 0.5 * cos((i + 1) * 2 * M_PI / n);
        vertices[i][13] = 0.5 * sin((i + 1) * 2 * M_PI / n);
        vertices[i][14] = prismLen;
        vertices[i][15] = 1;
        vertices[i][16] = 1;
        vertices[i][17] = 0;
    }
    for (int i = n; i < 2 * n; i++)
    {
        vertices[i][0] = 0;
        vertices[i][1] = 0;
        vertices[i][2] = -prismLen;
        vertices[i][3] = 0;
        vertices[i][4] = 1;
        vertices[i][5] = 1;
        vertices[i][6] = 0.5 * cos(i * 2 * M_PI / n);
        vertices[i][7] = 0.5 * sin(i * 2 * M_PI / n);
        vertices[i][8] = -prismLen;
        vertices[i][9] = 0;
        vertices[i][10] = 1;
        vertices[i][11] = 1;
        vertices[i][12] = 0.5 * cos((i + 1) * 2 * M_PI / n);
        vertices[i][13] = 0.5 * sin((i + 1) * 2 * M_PI / n);
        vertices[i][14] = -prismLen;
        vertices[i][15] = 0;
        vertices[i][16] = 1;
        vertices[i][17] = 1;
    }
    for (int i = 2 * n; i < 3 * n; i++)
    {
        vertices[i][0] = 0.5 * cos(i * 2 * M_PI / n);
        vertices[i][1] = 0.5 * sin(i * 2 * M_PI / n);
        vertices[i][2] = prismLen;
        vertices[i][3] = (1.0f / n) * (i % n);
        vertices[i][4] = 0;
        vertices[i][5] = (1.0f / n) * (i % n);
        vertices[i][6] = 0.5 * cos(i * 2 * M_PI / n);
        vertices[i][7] = 0.5 * sin(i * 2 * M_PI / n);
        vertices[i][8] = -prismLen;
        vertices[i][9] = (1.0f / n) * (i % n);
        vertices[i][10] = 0;
        vertices[i][11] = (1.0f / n) * (i % n);
        vertices[i][12] = 0.5 * cos((i + 1) * 2 * M_PI / n);
        vertices[i][13] = 0.5 * sin((i + 1) * 2 * M_PI / n);
        vertices[i][14] = -prismLen;
        vertices[i][15] = (1.0f / n) * (i % n);
        vertices[i][16] = 0;
        vertices[i][17] = (1.0f / n) * (i % n);
    }
    for (int i = 3 * n; i < 4 * n; i++)
    {
        vertices[i][0] = 0.5 * cos((i + 1) * 2 * M_PI / n);
        vertices[i][1] = 0.5 * sin((i + 1) * 2 * M_PI / n);
        vertices[i][2] = -prismLen;
        vertices[i][3] = (1.0f / n) * (i % n);
        vertices[i][4] = 0;
        vertices[i][5] = (1.0f / n) * (i % n);
        vertices[i][6] = 0.5 * cos(i * 2 * M_PI / n);
        vertices[i][7] = 0.5 * sin(i * 2 * M_PI / n);
        vertices[i][8] = prismLen;
        vertices[i][9] = (1.0f / n) * (i % n);
        vertices[i][10] = 0;
        vertices[i][11] = (1.0f / n) * (i % n);
        vertices[i][12] = 0.5 * cos((i + 1) * 2 * M_PI / n);
        vertices[i][13] = 0.5 * sin((i + 1) * 2 * M_PI / n);
        vertices[i][14] = prismLen;
        vertices[i][15] = (1.0f / n) * (i % n);
        vertices[i][16] = 0;
        vertices[i][17] = (1.0f / n) * (i % n);
    }
    // Init object specifics
    pos = glm::vec3(0, 0, 0);
    angle = 0;

    // Gpu buffer
    unsigned int VBO, VAO;
    glGenVertexArrays(1, &VAO);                                                         // Init VAO
    glGenBuffers(1, &VBO);                                                              // Generates vertex buffers

    glBindVertexArray(VAO);                                                             // Bind VBO, VAO

    glBindBuffer(GL_ARRAY_BUFFER, VBO);                                                 // Binds buffers to VBO
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), (float *)vertices, GL_STATIC_DRAW); // Uploads data to GPU

    // Link vertex array
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void *)0); // Tells openGL how to interpret the data
    glEnableVertexAttribArray(0);                                                  // Enables vertex attribute array

    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void *)(3 * sizeof(float)));
    glEnableVertexAttribArray(1);

    glBindBuffer(GL_ARRAY_BUFFER, 0); // Unbind VBO
    glBindVertexArray(0);             // Unbind VAO

    // Position of prism top faces
    glm::vec3 topPos[] =
        {
            glm::vec3(0, 0, prismLen),
            glm::vec3(0, 0, -prismLen)};

    // render loop
    // -----------
    glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);
    while (!glfwWindowShouldClose(window))
    {
        // per-frame time logic
        // --------------------
        float currentFrame = glfwGetTime();
        deltaTime = currentFrame - lastFrame;
        lastFrame = currentFrame;

        // input
        // -----
        processInput(window);

        // render
        // ------
        glClearColor(0.2f, 0.3f, 0.3f, 1.0f); // Bg color
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

        // activate shader
        ourShader.use();        // Use shaders
        glBindVertexArray(VAO); // Bind VAO

        model = glm::mat4(1.0f);
        model = glm::translate(model, pos);
        model = glm::rotate(model, glm::radians(angle), glm::vec3(1.0f, 0, 0));
        // Perspective and view
        view = camera.GetViewMatrix();

        // pass projection matrix to shader (note that in this case it could change every frame)
        projection = glm::perspective(glm::radians(camera.Zoom), (float)SCR_WIDTH / (float)SCR_HEIGHT, 0.1f, 100.0f);
        
        ourShader.setMat4("model", model);
        ourShader.setMat4("view", view);
        ourShader.setMat4("projection", projection);
        for (int i = 0; i < 2; i++)
        {
            glDrawArrays(GL_TRIANGLES, 0, 12 * n); // Draw Triangle
        }

        // glfw: swap buffers and poll IO events (keys pressed/released, mouse moved etc.)
        // -------------------------------------------------------------------------------
        glfwSwapBuffers(window);
        glfwPollEvents();
    }
    
    // optional: de-allocate all resources once they've outlived their purpose:
    // ------------------------------------------------------------------------
    glDeleteVertexArrays(1, &VAO);
    glDeleteBuffers(1, &VBO);

    // glfw: terminate, clearing all previously allocated GLFW resources.
    // ------------------------------------------------------------------
    glfwTerminate();
    return 0;
}

// process all input: query GLFW whether relevant keys are pressed/released this frame and react accordingly
// ---------------------------------------------------------------------------------------------------------
void processInput(GLFWwindow *window)
{
    // On pressing ESC the OpenGL window closes
    //-----------------------------------------
    if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
        glfwSetWindowShouldClose(window, true);

    // ON pressing W the camera moves closer to the object / forward
    //--------------------------------------------------------------
    if (glfwGetKey(window, GLFW_KEY_W) == GLFW_PRESS)
    {
        if (outOfPlace)
            resetState();
        camera.ProcessKeyboard(FORWARD, deltaTime);
    }

    // ON pressing S the camera moves away to the object / backward
    //-------------------------------------------------------------
    if (glfwGetKey(window, GLFW_KEY_S) == GLFW_PRESS)
    {
        if (outOfPlace)
            resetState();
        camera.ProcessKeyboard(BACKWARD, deltaTime);
    }

    // ON pressing A the camera moves left to the object
    //--------------------------------------------------
    if (glfwGetKey(window, GLFW_KEY_A) == GLFW_PRESS)
    {
        if (outOfPlace)
            resetState();
        camera.ProcessKeyboard(LEFT, deltaTime);
    }

    // ON pressing D the camera moves right to the object
    //--------------------------------------------------
    if (glfwGetKey(window, GLFW_KEY_D) == GLFW_PRESS)
    {
        if (outOfPlace)
            resetState();
        camera.ProcessKeyboard(RIGHT, deltaTime);
    }

    // ON pressing Q the camera moves up to the object
    //--------------------------------------------------
    if (glfwGetKey(window, GLFW_KEY_Q) == GLFW_PRESS)
    {
        if (outOfPlace)
            resetState();
        camera.ProcessKeyboard(UP, deltaTime);
    }

    // ON pressing E the camera moves down to the object
    //--------------------------------------------------
    if (glfwGetKey(window, GLFW_KEY_E) == GLFW_PRESS)
    {
        if (outOfPlace)
            resetState();
        camera.ProcessKeyboard(DOWN, deltaTime);
    }

    // ON pressing ↑ the object moves up
    //----------------------------------
    if (glfwGetKey(window, GLFW_KEY_UP) == GLFW_PRESS)
    {
        outOfPlace = true;
        moveModel(UP, deltaTime);
    }

    // ON pressing ↓ the object moves down
    //------------------------------------
    if (glfwGetKey(window, GLFW_KEY_DOWN) == GLFW_PRESS)
    {
        outOfPlace = true;
        moveModel(DOWN, deltaTime);
    }

    // ON pressing PgUP the object moves away from the camera
    //-------------------------------------------------------
    if (glfwGetKey(window, GLFW_KEY_PAGE_UP) == GLFW_PRESS)
    {
        outOfPlace = true;
        moveModel(FORWARD, deltaTime);
    }

    // ON pressing PgDOWN the object moves closer from the camera
    //-------------------------------------------------------
    if (glfwGetKey(window, GLFW_KEY_PAGE_DOWN) == GLFW_PRESS)
    {
        outOfPlace = true;
        moveModel(BACKWARD, deltaTime);
    }

    // ON pressing ← the object moves left
    //------------------------------------
    if (glfwGetKey(window, GLFW_KEY_LEFT) == GLFW_PRESS)
    {
        outOfPlace = true;
        moveModel(LEFT, deltaTime);
    }

    // ON pressing → the object moves right
    //-------------------------------------
    if (glfwGetKey(window, GLFW_KEY_RIGHT) == GLFW_PRESS)
    {
        outOfPlace = true;
        moveModel(RIGHT, deltaTime);
    }

    // On pressing R key the object starts rotating around an axis
    //------------------------------------------------------------
    if (glfwGetKey(window, GLFW_KEY_R) == GLFW_PRESS)
    {
        modelSpin = !modelSpin;
    }

    // On pressing HOME key the camera starts rotating around the object
    //------------------------------------------------------------------
    if (glfwGetKey(window, GLFW_KEY_HOME) == GLFW_PRESS)
    {
        camSpin = !camSpin;
    }

    // On pressing T key the polygon transorms in line and fill
    //---------------------------------------------------------
    if(glfwGetKey(window, GLFW_KEY_T) == GLFW_PRESS)
    {
        lines = !lines;
    }

    if(lines)
    {
        glPolygonMode(GL_FRONT_AND_BACK, GL_LINE);
    }
    else
    {
        glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);
    }

    if (camSpin)
    {
        if (outOfPlace)
            resetState();
        float w = 40.0f * deltaTime;
        glm::mat4 rot = glm::mat3(1.0f);
        rot = glm::rotate(rot, glm::radians(w), glm::vec3(0, 1, 0));
        camera.Position = glm::vec3(rot * glm::vec4(camera.Position, 1.0f));
    }
    if (modelSpin)
    {
        float w = 40.0f * deltaTime;
        angle += w;
    }
}

// glfw: whenever the window size changed (by OS or user resize) this callback function executes
// ---------------------------------------------------------------------------------------------
void framebuffer_size_callback(GLFWwindow *window, int width, int height)
{
    glViewport(0, 0, width, height);
}

// glfw: whenever the mouse moves, this callback is called
// -------------------------------------------------------
void mouse_callback(GLFWwindow* window, double xposIn, double yposIn)
{
    float xpos = static_cast<float>(xposIn);
    float ypos = static_cast<float>(yposIn);

    if (firstMouse)
    {
        lastX = xpos;
        lastY = ypos;
        firstMouse = false;
    }

    float xoffset = xpos - lastX;
    float yoffset = lastY - ypos; // reversed since y-coordinates go from bottom to top

    lastX = xpos;
    lastY = ypos;

    camera.ProcessMouseMovement(xoffset, yoffset);
}

// glfw: whenever the mouse scroll wheel scrolls, this callback is called
// ----------------------------------------------------------------------
void scroll_callback(GLFWwindow* window, double xoffset, double yoffset)
{
    camera.ProcessMouseScroll(static_cast<float>(yoffset));
}

// Moving the object
//------------------
void moveModel(int dir, float deltaTime)
{
    float v = 2.50f * deltaTime;
    glm::vec3 Front = camera.Position;
    glm::vec3 Right = glm::normalize(glm::cross(Front, camera.WorldUp));
    glm::vec3 Up = glm::normalize(glm::cross(Right, Front));
    if (dir == UP)
    {
        pos += Up * v;
    }
    if (dir == DOWN)
    {
        pos -= Up * v;
    }
    if (dir == FORWARD)
    {
        pos -= Front * v;
    }
    if (dir == BACKWARD)
    {
        pos += Front * v;
    }
    if (dir == RIGHT)
    {
        pos -= Right * v;
    }
    if (dir == LEFT)
    {
        pos += Right * v;
    }
}

// Setting a reset state if the object is outside the display window
//------------------------------------------------------------------
void resetState()
{
    outOfPlace = false;
    pos = glm::vec3(0, 0, 0);
    angle = 0;
    camera.Position = glm::vec3(0, 0, 3);
}