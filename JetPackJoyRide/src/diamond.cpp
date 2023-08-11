#include "diamond.h"
#include "main.h"
#include<math.h>

Diamond::Diamond(float x, float y) {
    this->position = glm::vec3(x, y, 0);
    this->rotation = 0;
    this->taken=0;
    // Our vertices. Three consecutive floats give a 3D vertex; Three consecutive vertices give a triangle.
    // A cube has 6 faces with 2 triangles each, so this makes 6*2=12 triangles, and 12*3 vertices
    const static GLfloat vertex_buffer_data[]={
        20.0, 0.0, 0.0,
        -20.0, 0.0, 0.0, 
        0.0, 14.14, 0.0,
        20.0, 0.0, 0.0,
        -20.0, 0.0, 0.0,
        0.0, -14.14, 0.0
    };
    
    this->object = create3DObject(GL_TRIANGLES, 2*3, vertex_buffer_data, COLOR_BLUE, GL_FILL);
}

void Diamond::draw(glm::mat4 VP) {
    Matrices.model = glm::mat4(1.0f);
    glm::mat4 translate = glm::translate (this->position);    // glTranslatef
    glm::mat4 rotate    = glm::rotate((float) (this->rotation * M_PI / 180.0f), glm::vec3(1, 0, 0));
    // No need as coords centered at 0, 0, 0 of cube arouund which we waant to rotate
    // rotate          = rotate * glm::translate(glm::vec3(0, -0.6, 0));
    Matrices.model *= (translate * rotate);
    glm::mat4 MVP = VP * Matrices.model;
    glUniformMatrix4fv(Matrices.MatrixID, 1, GL_FALSE, &MVP[0][0]);
    draw3DObject(this->object);
}

void Diamond::tick() {
    this->position.x-=2*Level;
}

