using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace BackEnd {
    public partial class Form1 : Form {

        private string fileName;

        public Form1() {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e) {

        }

        private void label2_Click(object sender, EventArgs e) {

        }

        private void textBox2_TextChanged(object sender, EventArgs e) {

        }

        private void confirmBtn_Click(object sender, EventArgs e) {
            string name = nameTxt.Text;
            string description = descriptionTxt.Text;
            string price = priceTxt.Text;

            DialogResult dr = openFileDialog1.ShowDialog();
           

        }

        private void openFileDialog1_FileOk(object sender, CancelEventArgs e) {
            fileName = openFileDialog1.FileName;
            Image imageFileSrc = Image.FromFile(fileName);
            pictureBox1.Image = imageFileSrc;
         }

        private void button1_Click(object sender, EventArgs e) {

        }
    }
}
