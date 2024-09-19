def on_button_pressed_a():
    basic.show_string("Alois")
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_icon(IconNames.ANGRY)

def on_forever():
    pass
basic.forever(on_forever)
