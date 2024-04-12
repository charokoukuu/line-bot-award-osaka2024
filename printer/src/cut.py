import escpos.printer
printer = escpos.printer.Serial("/dev/ttyACM0")
printer.cut()
