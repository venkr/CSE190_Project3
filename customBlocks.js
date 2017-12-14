
goog.require('Blockly.Blocks');

/************************
 *  BLOCKLY DEFINITIONS  *
 *************************/

Blockly.Blocks['whenrunclicked'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("When RUN is clicked");
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['clearscreen'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Clear Canvas");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['catpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Cat Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "catIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['elepose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Elephant Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "eleIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['catmove'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move cat")
            .appendField("x:")
            .appendField(new Blockly.FieldNumber('0'), 'x')
            .appendField("y:")
            .appendField(new Blockly.FieldNumber('0'), 'y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['elemove'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move elephant")
            .appendField("x:")
            .appendField(new Blockly.FieldNumber('0'), 'x')
            .appendField("y:")
            .appendField(new Blockly.FieldNumber('0'), 'y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['showtext'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Show text")
            .appendField(new Blockly.FieldTextInput('Hello World'),
                     'TEXT')
            .appendField("x:")
            .appendField(new Blockly.FieldNumber('0'), 'x')
            .appendField("y:")
            .appendField(new Blockly.FieldNumber('0'), 'y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['whenrunclicked'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var blockCode = statements_name;
    return blockCode;
};

Blockly.JavaScript['clearscreen'] = function(block) {
    var blockCode = 'clearCanvas();';
    return blockCode;
};

Blockly.JavaScript['catpose'] = function(block) {
    var dropdown_catindex = block.getFieldValue('catIndex');
    var blockCode = 'updatePose('+dropdown_catindex+', true);';
    return blockCode;
};

Blockly.JavaScript['elepose'] = function(block) {
    var dropdown_eleindex = block.getFieldValue('eleIndex');
    var blockCode = 'updatePose('+dropdown_eleindex+', false);';
    return blockCode;
};

Blockly.JavaScript['catmove'] = function(block) {
    var x_val = block.getFieldValue('x');
    var y_val = block.getFieldValue('y');
    var blockCode = 'move('+x_val + ',' + y_val +', true);';
    return blockCode;
};

Blockly.JavaScript['elemove'] = function(block) {
    var x_val = block.getFieldValue('x');
    var y_val = block.getFieldValue('y');
    var blockCode = 'move('+x_val + ',' + y_val +', false);';
    return blockCode;
};

Blockly.JavaScript['showtext'] = function(block) {
    var text = block.getFieldValue('TEXT');
    var x_val = block.getFieldValue('x');
    var y_val = block.getFieldValue('y');
    var blockCode = 'addtext("' + text + '",' +x_val + ',' + y_val +');';
    return blockCode;
};


