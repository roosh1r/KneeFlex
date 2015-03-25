import json
import csv
import sys

filename = raw_input('Enter a filename: ')

json_data = open(filename).read()

data = json.loads(json_data)

text_file = open("output-"+filename+".txt", "w")

length = len(data["leg_x"])
for i in xrange(0, length):
	time_ = str(i/10.0)
	leg_x = str(data["leg_x"][i])
	leg_y = str(data["leg_y"][i])
	leg_z = str(data["leg_z"][i])
	thigh_x = str(data["thigh_x"][i])
	thigh_y = str(data["thigh_y"][i])
	thigh_z = str(data["thigh_z"][i])
	gyro_z = str(data["gyro_z"][i])
	string = time_ + ";" + leg_x + ";" + leg_y + ";" + leg_z + ";" + thigh_x + ";" + thigh_y + ";" + thigh_z + ";" + gyro_z
	text_file.write(string + '\n')

text_file.close()
