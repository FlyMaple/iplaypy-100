class Pizza:
    _prop = False

    @property
    def prop(self):
        return self._prop

    @prop.setter
    def prop(self, value):
        if input('Password:') == '1234':
            self._prop = True
        else:
            print('Alert!')

pizza = Pizza()
print(pizza.prop)
pizza.prop = True
print(pizza.prop)