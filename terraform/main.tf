provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "app" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "enterprise-app-instance"
  }
}

resource "aws_s3_bucket" "app_bucket" {
  bucket = "enterprise-app-bucket"
  acl    = "private"
}

resource "aws_eks_cluster" "k8s" {
  name     = "enterprise-app-cluster"
  role_arn = aws_iam_role.eks.arn

  vpc_config {
    subnet_ids = [aws_subnet.main.id]
  }
}

resource "aws_iam_role" "eks" {
  name = "enterprise-app-eks-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Service = "eks.amazonaws.com"
      }
      Action = "sts:AssumeRole"
    }]
  })
}

output "cluster_name" {
  value = aws_eks_cluster.k8s.name
}