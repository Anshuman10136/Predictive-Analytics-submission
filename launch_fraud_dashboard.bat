@echo off
title Launch FraudShield AI Project
echo ====================================================================
echo Starting FraudShield AI: Multi-Dataset Credit Card Fraud Detection
echo Open your browser at http://localhost:8501
echo ====================================================================
cd /d "%~dp0credit_card_fraud_detection"
python -m streamlit run app.py
pause
